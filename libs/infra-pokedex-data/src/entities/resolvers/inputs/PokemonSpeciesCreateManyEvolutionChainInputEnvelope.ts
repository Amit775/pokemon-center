import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyEvolutionChainInput } from "../inputs/PokemonSpeciesCreateManyEvolutionChainInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateManyEvolutionChainInputEnvelope", {})
export class PokemonSpeciesCreateManyEvolutionChainInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateManyEvolutionChainInput], {
    nullable: false
  })
  data!: PokemonSpeciesCreateManyEvolutionChainInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
