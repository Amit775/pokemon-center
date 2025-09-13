import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateManySpeciesInput } from "../inputs/PokemonCreateManySpeciesInput";

@TypeGraphQL.InputType("PokemonCreateManySpeciesInputEnvelope", {})
export class PokemonCreateManySpeciesInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonCreateManySpeciesInput], {
    nullable: false
  })
  data!: PokemonCreateManySpeciesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
