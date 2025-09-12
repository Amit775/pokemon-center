import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersCreateManySpeciesInput } from "../inputs/PokemonDexNumbersCreateManySpeciesInput";

@TypeGraphQL.InputType("PokemonDexNumbersCreateManySpeciesInputEnvelope", {})
export class PokemonDexNumbersCreateManySpeciesInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateManySpeciesInput], {
    nullable: false
  })
  data!: PokemonDexNumbersCreateManySpeciesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
