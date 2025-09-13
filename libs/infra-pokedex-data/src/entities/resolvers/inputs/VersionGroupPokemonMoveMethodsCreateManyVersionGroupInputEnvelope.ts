import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope", {})
export class VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
