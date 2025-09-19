import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagUpdateInput } from "../../../inputs/MoveFlagUpdateInput";
import { MoveFlagWhereUniqueInput } from "../../../inputs/MoveFlagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveFlagArgs {
  @TypeGraphQL.Field(_type => MoveFlagUpdateInput, {
    nullable: false
  })
  data!: MoveFlagUpdateInput;

  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagWhereUniqueInput;
}
