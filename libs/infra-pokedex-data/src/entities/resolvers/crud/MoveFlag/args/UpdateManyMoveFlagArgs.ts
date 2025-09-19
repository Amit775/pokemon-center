import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagUpdateManyMutationInput } from "../../../inputs/MoveFlagUpdateManyMutationInput";
import { MoveFlagWhereInput } from "../../../inputs/MoveFlagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveFlagArgs {
  @TypeGraphQL.Field(_type => MoveFlagUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveFlagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  where?: MoveFlagWhereInput | undefined;
}
