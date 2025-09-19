import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexWhereUniqueInput } from "../../../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokedexOrThrowArgs {
  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexWhereUniqueInput;
}
