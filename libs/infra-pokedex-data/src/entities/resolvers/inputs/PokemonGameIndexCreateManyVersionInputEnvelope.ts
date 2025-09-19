import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateManyVersionInput } from "../inputs/PokemonGameIndexCreateManyVersionInput";

@TypeGraphQL.InputType("PokemonGameIndexCreateManyVersionInputEnvelope", {})
export class PokemonGameIndexCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateManyVersionInput], {
    nullable: false
  })
  data!: PokemonGameIndexCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
