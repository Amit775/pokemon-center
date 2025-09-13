import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutVersionGroupsInput } from "../inputs/GenerationsCreateOrConnectWithoutVersionGroupsInput";
import { GenerationsCreateWithoutVersionGroupsInput } from "../inputs/GenerationsCreateWithoutVersionGroupsInput";
import { GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput";
import { GenerationsUpsertWithoutVersionGroupsInput } from "../inputs/GenerationsUpsertWithoutVersionGroupsInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutVersionGroupsInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput | undefined;
}
