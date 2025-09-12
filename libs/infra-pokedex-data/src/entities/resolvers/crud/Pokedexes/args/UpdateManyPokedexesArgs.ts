import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesUpdateManyMutationInput } from "../../../inputs/PokedexesUpdateManyMutationInput";
import { PokedexesWhereInput } from "../../../inputs/PokedexesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;
}
