import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupUpdateInput } from "../../../inputs/PokedexVersionGroupUpdateInput";
import { PokedexVersionGroupWhereUniqueInput } from "../../../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateInput, {
    nullable: false
  })
  data!: PokedexVersionGroupUpdateInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;
}
