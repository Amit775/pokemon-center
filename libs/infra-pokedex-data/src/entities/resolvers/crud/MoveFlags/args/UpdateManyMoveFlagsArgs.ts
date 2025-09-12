import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsUpdateManyMutationInput } from "../../../inputs/MoveFlagsUpdateManyMutationInput";
import { MoveFlagsWhereInput } from "../../../inputs/MoveFlagsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveFlagsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  where?: MoveFlagsWhereInput | undefined;
}
