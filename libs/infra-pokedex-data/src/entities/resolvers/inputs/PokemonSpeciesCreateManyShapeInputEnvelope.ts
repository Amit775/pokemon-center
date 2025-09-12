import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyShapeInput } from "../inputs/PokemonSpeciesCreateManyShapeInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateManyShapeInputEnvelope", {})
export class PokemonSpeciesCreateManyShapeInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateManyShapeInput], {
    nullable: false
  })
  data!: PokemonSpeciesCreateManyShapeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
