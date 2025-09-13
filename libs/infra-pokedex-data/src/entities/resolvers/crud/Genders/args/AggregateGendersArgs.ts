import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersOrderByWithRelationInput } from "../../../inputs/GendersOrderByWithRelationInput";
import { GendersWhereInput } from "../../../inputs/GendersWhereInput";
import { GendersWhereUniqueInput } from "../../../inputs/GendersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGendersArgs {
  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  where?: GendersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GendersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GendersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GendersWhereUniqueInput, {
    nullable: true
  })
  cursor?: GendersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
