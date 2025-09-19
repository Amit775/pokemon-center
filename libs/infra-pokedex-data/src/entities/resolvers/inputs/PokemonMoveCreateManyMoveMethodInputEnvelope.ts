import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyMoveMethodInput } from "../inputs/PokemonMoveCreateManyMoveMethodInput";

@TypeGraphQL.InputType("PokemonMoveCreateManyMoveMethodInputEnvelope", {})
export class PokemonMoveCreateManyMoveMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateManyMoveMethodInput], {
    nullable: false
  })
  data!: PokemonMoveCreateManyMoveMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
