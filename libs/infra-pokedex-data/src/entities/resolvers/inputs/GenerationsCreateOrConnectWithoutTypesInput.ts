import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutTypesInput } from "../inputs/GenerationsCreateWithoutTypesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutTypesInput", {})
export class GenerationsCreateOrConnectWithoutTypesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutTypesInput;
}
