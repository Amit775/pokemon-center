import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateManyVersionGroupInput } from "../inputs/PokedexVersionGroupCreateManyVersionGroupInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateManyVersionGroupInputEnvelope", {})
export class PokedexVersionGroupCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: PokedexVersionGroupCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
