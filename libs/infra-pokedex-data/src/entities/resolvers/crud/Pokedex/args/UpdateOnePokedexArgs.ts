import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexUpdateInput } from "../../../inputs/PokedexUpdateInput";
import { PokedexWhereUniqueInput } from "../../../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokedexArgs {
  @TypeGraphQL.Field(_type => PokedexUpdateInput, {
    nullable: false
  })
  data!: PokedexUpdateInput;

  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexWhereUniqueInput;
}
