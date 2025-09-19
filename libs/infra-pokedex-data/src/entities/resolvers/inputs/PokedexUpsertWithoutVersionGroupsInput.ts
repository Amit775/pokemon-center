import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateWithoutVersionGroupsInput } from "../inputs/PokedexCreateWithoutVersionGroupsInput";
import { PokedexUpdateWithoutVersionGroupsInput } from "../inputs/PokedexUpdateWithoutVersionGroupsInput";
import { PokedexWhereInput } from "../inputs/PokedexWhereInput";

@TypeGraphQL.InputType("PokedexUpsertWithoutVersionGroupsInput", {})
export class PokedexUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: PokedexUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokedexCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokedexCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;
}
