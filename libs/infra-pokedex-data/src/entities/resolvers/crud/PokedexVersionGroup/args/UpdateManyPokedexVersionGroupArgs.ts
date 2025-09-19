import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupUpdateManyMutationInput } from "../../../inputs/PokedexVersionGroupUpdateManyMutationInput";
import { PokedexVersionGroupWhereInput } from "../../../inputs/PokedexVersionGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexVersionGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupWhereInput | undefined;
}
