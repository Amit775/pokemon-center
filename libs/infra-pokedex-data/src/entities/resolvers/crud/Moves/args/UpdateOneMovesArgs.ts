import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesUpdateInput } from "../../../inputs/MovesUpdateInput";
import { MovesWhereUniqueInput } from "../../../inputs/MovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovesArgs {
  @TypeGraphQL.Field(_type => MovesUpdateInput, {
    nullable: false
  })
  data!: MovesUpdateInput;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;
}
