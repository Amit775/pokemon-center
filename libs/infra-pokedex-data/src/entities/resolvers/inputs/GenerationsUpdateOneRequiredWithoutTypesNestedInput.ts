import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutTypesInput } from "../inputs/GenerationsCreateOrConnectWithoutTypesInput";
import { GenerationsCreateWithoutTypesInput } from "../inputs/GenerationsCreateWithoutTypesInput";
import { GenerationsUpdateToOneWithWhereWithoutTypesInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutTypesInput";
import { GenerationsUpsertWithoutTypesInput } from "../inputs/GenerationsUpsertWithoutTypesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutTypesNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutTypesNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutTypesInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutTypesInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutTypesInput | undefined;
}
