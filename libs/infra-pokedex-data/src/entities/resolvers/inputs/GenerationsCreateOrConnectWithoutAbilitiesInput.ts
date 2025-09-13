import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutAbilitiesInput } from "../inputs/GenerationsCreateWithoutAbilitiesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutAbilitiesInput", {})
export class GenerationsCreateOrConnectWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutAbilitiesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutAbilitiesInput;
}
