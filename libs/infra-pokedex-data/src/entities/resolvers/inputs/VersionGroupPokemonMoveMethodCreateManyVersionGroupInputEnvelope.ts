import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateManyVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateManyVersionGroupInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope", {})
export class VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
