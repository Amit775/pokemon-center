import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexOrderByWithRelationInput } from "../../../inputs/TypeGameIndexOrderByWithRelationInput";
import { TypeGameIndexWhereInput } from "../../../inputs/TypeGameIndexWhereInput";
import { TypeGameIndexWhereUniqueInput } from "../../../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  where?: TypeGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TypeGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: TypeGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
