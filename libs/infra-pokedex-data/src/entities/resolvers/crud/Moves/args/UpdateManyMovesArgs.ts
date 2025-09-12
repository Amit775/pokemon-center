import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesUpdateManyMutationInput } from "../../../inputs/MovesUpdateManyMutationInput";
import { MovesWhereInput } from "../../../inputs/MovesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovesArgs {
  @TypeGraphQL.Field(_type => MovesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
