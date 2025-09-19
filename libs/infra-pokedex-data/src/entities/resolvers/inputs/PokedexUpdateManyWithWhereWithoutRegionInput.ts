import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexScalarWhereInput } from "../inputs/PokedexScalarWhereInput";
import { PokedexUpdateManyMutationInput } from "../inputs/PokedexUpdateManyMutationInput";

@TypeGraphQL.InputType("PokedexUpdateManyWithWhereWithoutRegionInput", {})
export class PokedexUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => PokedexScalarWhereInput, {
    nullable: false
  })
  where!: PokedexScalarWhereInput;

  @TypeGraphQL.Field(_type => PokedexUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexUpdateManyMutationInput;
}
