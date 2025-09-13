import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsOrderByWithRelationInput } from "../../../inputs/MoveMetaAilmentsOrderByWithRelationInput";
import { MoveMetaAilmentsWhereInput } from "../../../inputs/MoveMetaAilmentsWhereInput";
import { MoveMetaAilmentsWhereUniqueInput } from "../../../inputs/MoveMetaAilmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveMetaAilmentsArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveMetaAilmentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveMetaAilmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
