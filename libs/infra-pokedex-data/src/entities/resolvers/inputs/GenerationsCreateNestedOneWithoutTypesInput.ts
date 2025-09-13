import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutTypesInput } from "../inputs/GenerationsCreateOrConnectWithoutTypesInput";
import { GenerationsCreateWithoutTypesInput } from "../inputs/GenerationsCreateWithoutTypesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedOneWithoutTypesInput", {})
export class GenerationsCreateNestedOneWithoutTypesInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;
}
