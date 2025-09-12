import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyKnownMoveInput } from "../inputs/PokemonEvolutionCreateManyKnownMoveInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyKnownMoveInputEnvelope", {})
export class PokemonEvolutionCreateManyKnownMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyKnownMoveInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyKnownMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
