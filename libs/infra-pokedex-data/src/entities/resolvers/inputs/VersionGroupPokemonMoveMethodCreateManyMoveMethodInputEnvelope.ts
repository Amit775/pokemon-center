import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateManyMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodCreateManyMoveMethodInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope", {})
export class VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateManyMoveMethodInput], {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodCreateManyMoveMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
