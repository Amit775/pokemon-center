import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateManyVersionInput } from "../inputs/PokemonGameIndicesCreateManyVersionInput";

@TypeGraphQL.InputType("PokemonGameIndicesCreateManyVersionInputEnvelope", {})
export class PokemonGameIndicesCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateManyVersionInput], {
    nullable: false
  })
  data!: PokemonGameIndicesCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
