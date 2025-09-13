import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateManyVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateManyVersionGroupInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateManyVersionGroupInputEnvelope", {})
export class PokedexVersionGroupsCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: PokedexVersionGroupsCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
