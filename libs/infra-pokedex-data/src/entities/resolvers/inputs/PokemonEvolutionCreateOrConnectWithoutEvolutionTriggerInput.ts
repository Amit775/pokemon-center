import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionCreateWithoutEvolutionTriggerInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput", {})
export class PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutEvolutionTriggerInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutEvolutionTriggerInput;
}
