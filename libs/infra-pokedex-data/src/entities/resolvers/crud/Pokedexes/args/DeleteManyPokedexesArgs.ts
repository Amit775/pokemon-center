import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesWhereInput } from "../../../inputs/PokedexesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;
}
