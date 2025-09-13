import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesOrderByWithRelationInput } from "../../../inputs/TypeGameIndicesOrderByWithRelationInput";
import { TypeGameIndicesWhereInput } from "../../../inputs/TypeGameIndicesWhereInput";
import { TypeGameIndicesWhereUniqueInput } from "../../../inputs/TypeGameIndicesWhereUniqueInput";
import { TypeGameIndicesScalarFieldEnum } from "../../../../enums/TypeGameIndicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereInput, {
    nullable: true
  })
  where?: TypeGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TypeGameIndicesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: true
  })
  cursor?: TypeGameIndicesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"type_id" | "generation_id" | "game_index"> | undefined;
}
