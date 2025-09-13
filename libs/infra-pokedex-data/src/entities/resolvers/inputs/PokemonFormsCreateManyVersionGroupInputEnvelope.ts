import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateManyVersionGroupInput } from "../inputs/PokemonFormsCreateManyVersionGroupInput";

@TypeGraphQL.InputType("PokemonFormsCreateManyVersionGroupInputEnvelope", {})
export class PokemonFormsCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormsCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: PokemonFormsCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
