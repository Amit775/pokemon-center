import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexWhereInput } from "../../inputs/ItemGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class GenerationCountItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  where?: ItemGameIndexWhereInput | undefined;
}
