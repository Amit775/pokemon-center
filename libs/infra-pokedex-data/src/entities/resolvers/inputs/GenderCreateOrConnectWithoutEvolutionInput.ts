import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderCreateWithoutEvolutionInput } from "../inputs/GenderCreateWithoutEvolutionInput";
import { GenderWhereUniqueInput } from "../inputs/GenderWhereUniqueInput";

@TypeGraphQL.InputType("GenderCreateOrConnectWithoutEvolutionInput", {})
export class GenderCreateOrConnectWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: false
  })
  where!: GenderWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenderCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: GenderCreateWithoutEvolutionInput;
}
