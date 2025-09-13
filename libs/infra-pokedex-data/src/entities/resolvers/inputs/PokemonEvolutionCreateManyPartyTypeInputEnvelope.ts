import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyPartyTypeInput } from "../inputs/PokemonEvolutionCreateManyPartyTypeInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyPartyTypeInputEnvelope", {})
export class PokemonEvolutionCreateManyPartyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyPartyTypeInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyPartyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
