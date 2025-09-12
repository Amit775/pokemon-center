import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyColorInput } from "../inputs/PokemonSpeciesCreateManyColorInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateManyColorInputEnvelope", {})
export class PokemonSpeciesCreateManyColorInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateManyColorInput], {
    nullable: false
  })
  data!: PokemonSpeciesCreateManyColorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
