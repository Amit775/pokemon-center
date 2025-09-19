import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateManySpeciesInput } from "../inputs/PokemonDexNumberCreateManySpeciesInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateManySpeciesInputEnvelope", {})
export class PokemonDexNumberCreateManySpeciesInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateManySpeciesInput], {
    nullable: false
  })
  data!: PokemonDexNumberCreateManySpeciesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
