import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexUpdateManyMutationInput } from "../../../inputs/PokedexUpdateManyMutationInput";
import { PokedexWhereInput } from "../../../inputs/PokedexWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokedexArgs {
  @TypeGraphQL.Field(_type => PokedexUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;
}
