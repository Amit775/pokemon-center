import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope", {})
export class VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput], {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
