import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateManyPokedexInput } from "../inputs/PokemonDexNumberCreateManyPokedexInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateManyPokedexInputEnvelope", {})
export class PokemonDexNumberCreateManyPokedexInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateManyPokedexInput], {
    nullable: false
  })
  data!: PokemonDexNumberCreateManyPokedexInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
