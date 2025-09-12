import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutTriggerItemInput } from "../inputs/PokemonEvolutionCreateWithoutTriggerItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutTriggerItemInput", {})
export class PokemonEvolutionCreateOrConnectWithoutTriggerItemInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutTriggerItemInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutTriggerItemInput;
}
