import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutVersionGroupsInput } from "../inputs/GenerationCreateOrConnectWithoutVersionGroupsInput";
import { GenerationCreateWithoutVersionGroupsInput } from "../inputs/GenerationCreateWithoutVersionGroupsInput";
import { GenerationUpdateToOneWithWhereWithoutVersionGroupsInput } from "../inputs/GenerationUpdateToOneWithWhereWithoutVersionGroupsInput";
import { GenerationUpsertWithoutVersionGroupsInput } from "../inputs/GenerationUpsertWithoutVersionGroupsInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationUpdateOneRequiredWithoutVersionGroupsNestedInput", {})
export class GenerationUpdateOneRequiredWithoutVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpsertWithoutVersionGroupsInput, {
    nullable: true
  })
  upsert?: GenerationUpsertWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateToOneWithWhereWithoutVersionGroupsInput, {
    nullable: true
  })
  update?: GenerationUpdateToOneWithWhereWithoutVersionGroupsInput | undefined;
}
