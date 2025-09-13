import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateManyKnownMoveTypeInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope", {})
export class PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyKnownMoveTypeInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyKnownMoveTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
