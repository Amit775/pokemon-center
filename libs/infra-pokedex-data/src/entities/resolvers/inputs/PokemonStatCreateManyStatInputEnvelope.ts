import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatCreateManyStatInput } from "../inputs/PokemonStatCreateManyStatInput";

@TypeGraphQL.InputType("PokemonStatCreateManyStatInputEnvelope", {})
export class PokemonStatCreateManyStatInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonStatCreateManyStatInput], {
    nullable: false
  })
  data!: PokemonStatCreateManyStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
