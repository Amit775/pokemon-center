import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsCreateWithoutPokemonFormGenerationsInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput", {})
export class GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutPokemonFormGenerationsInput;
}
