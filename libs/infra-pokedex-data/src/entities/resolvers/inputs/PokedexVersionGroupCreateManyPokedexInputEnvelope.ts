import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateManyPokedexInput } from "../inputs/PokedexVersionGroupCreateManyPokedexInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateManyPokedexInputEnvelope", {})
export class PokedexVersionGroupCreateManyPokedexInputEnvelope {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateManyPokedexInput], {
    nullable: false
  })
  data!: PokedexVersionGroupCreateManyPokedexInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
