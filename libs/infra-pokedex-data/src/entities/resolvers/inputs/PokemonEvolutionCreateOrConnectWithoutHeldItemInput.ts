import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutHeldItemInput } from "../inputs/PokemonEvolutionCreateWithoutHeldItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateOrConnectWithoutHeldItemInput", {})
export class PokemonEvolutionCreateOrConnectWithoutHeldItemInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutHeldItemInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutHeldItemInput;
}
