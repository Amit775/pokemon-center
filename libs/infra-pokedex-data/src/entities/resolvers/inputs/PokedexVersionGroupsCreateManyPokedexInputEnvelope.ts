import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateManyPokedexInput } from "../inputs/PokedexVersionGroupsCreateManyPokedexInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateManyPokedexInputEnvelope", {})
export class PokedexVersionGroupsCreateManyPokedexInputEnvelope {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateManyPokedexInput], {
    nullable: false
  })
  data!: PokedexVersionGroupsCreateManyPokedexInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
