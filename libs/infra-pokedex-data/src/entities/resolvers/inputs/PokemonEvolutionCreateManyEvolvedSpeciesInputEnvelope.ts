import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyEvolvedSpeciesInput } from "../inputs/PokemonEvolutionCreateManyEvolvedSpeciesInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope", {})
export class PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyEvolvedSpeciesInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyEvolvedSpeciesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
